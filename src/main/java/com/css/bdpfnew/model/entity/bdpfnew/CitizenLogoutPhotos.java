/**
 * 
 */
package com.css.bdpfnew.model.entity.bdpfnew;

import java.sql.Blob;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * @Author erDuo
 * @Date 2018年12月17日 下午6:51:50
 * @Description
 */
@Entity
@Where(clause = "del_flag = 0")
@Table(name = "CITIZEN_LOGOUT_PHOTOS", schema = "bdpfnew2018")
@Data
@EqualsAndHashCode(callSuper = false)
public class CitizenLogoutPhotos extends BaseEntity {

	private static final long serialVersionUID = 5030100916634075364L;
	@Column(nullable = false, columnDefinition = "varchar2(32)")
	private String cdpfId;
	@Column(nullable = false, columnDefinition = "varchar2(20)")
	private String citizenId;
	@Column(nullable = false, columnDefinition = "number(4) default 0")
	private Integer isHulian;

	private Blob picture;

	@Column(nullable = false, columnDefinition = "number(4) default 0", insertable = false)
	private Integer delFlag;
}
